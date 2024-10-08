/**
 * GTS
 * Gift tracking 
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface AutoFillOptions { 
    type?: AutoFillOptions.TypeEnum;
    description?: string;
    defaultValue?: boolean;
}
export namespace AutoFillOptions {
    export type TypeEnum = 'Bedrock' | 'Chat GPT (OpenAI)' | 'Google VertexAI' | 'Ollama';
    export const TypeEnum = {
        Bedrock: 'Bedrock' as TypeEnum,
        Chat_GPT__OpenAI: 'Chat GPT (OpenAI)' as TypeEnum,
        Google_VertexAI: 'Google VertexAI' as TypeEnum,
        Ollama: 'Ollama' as TypeEnum
    };
}


