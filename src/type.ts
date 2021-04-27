export type Category = "none" | "node" | "image" | "pod" | "rs";

export interface DataType {
	oname: string // 해당 컨테이너의 이름
	onodeName: string // category node
	imageName: string // category image
	podName: string // category pod
	replicasetName: string | null // category rs // null의 경우 모으지 않고 각각 표시
	cpu_total: number // CPU 사용량
	[key: string]: any
}