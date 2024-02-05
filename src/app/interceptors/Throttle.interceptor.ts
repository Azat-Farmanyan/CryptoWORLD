import type { HttpInterceptorFn } from '@angular/common/http';
import { RequestThrottleService } from '../services/RequestThrottle.service';
import { inject } from '@angular/core';
import { Observable, concatMap, delay } from 'rxjs';

export const throttleInterceptor: HttpInterceptorFn = (req, next) => {
  const throttleService = inject(RequestThrottleService);
  console.log('request send');

  return next(req);

  if (throttleService.canMakeRequest()) {
    return next(req);
  } else {
    // Возвращаем пустой Observable, чтобы запрос не был отправлен
    return new Observable();
  }
};
