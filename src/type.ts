export type Category = "node" | "image" | "pod" | "rs";

export interface DataType {
	oname: String // 해당 컨테이너의 이름
	mem: number // 메모리 사용량
}