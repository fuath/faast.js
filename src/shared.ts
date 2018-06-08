export interface FunctionCall {
    name: string;
    args: any[];
    CallId: string;
    ResponseQueueUrl?: string;
}

export interface FunctionReturn {
    type: "returned" | "error";
    value?: any;
    CallId: string;
}
