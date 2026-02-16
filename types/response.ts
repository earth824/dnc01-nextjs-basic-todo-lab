type ErrorCode = 'VALIDATION_ERROR' | 'DUPLICATE_EMAIL' | 'INVALID_CREDENTIALS';

type ErrorReponse = {
  success: false;
  message: string;
  code: ErrorCode;
  details?: unknown;
};

type SuccessResponse<T = unknown> = {
  success: true;
  message?: string;
  data?: T;
};

export type ServerFunctionResponse<T = unknown> =
  | SuccessResponse<T>
  | ErrorReponse;
