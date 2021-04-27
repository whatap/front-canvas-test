export type Category = "none" | "node" | "image" | "pod" | "rs"; // 해당 값으로 분류

export interface DataType {
	name: string // 해당 컨테이너의 alias 이름
	container: number // primary key
	onodeName: string // category node
	imageName: string // category image
	podName: string // category pod
	replicasetName: string | null // category rs // null 의 경우 모으지 않고 각각 표시
	cpu_total: number // CPU 사용량
	[key: string]: any // 그 외 데이터는 무시하면 됩니다.
}