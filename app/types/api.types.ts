// 지출 내역 타입
/**
 * 사용 혹은 입금 비용 타입 (가장작은 단위)
 * id : 고유키
 * type : 코드명(010203)
 * day : dd
 * month : mm
 * year : yy
 * money : 금액
 * logs : 사용로그
 */
export type Paylogs = {
  id: string;
  type: string;
  year: string;
  month: string;
  day: string;
  money: number;
  logs: string;
};
