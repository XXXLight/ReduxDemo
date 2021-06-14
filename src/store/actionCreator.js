import { OmitProps } from "antd/lib/transfer/ListBody";
import {CHANGE_INPUT} from './actionTypes'

// 分类
export const changeInputAction =(value)=>({
    type:CHANGE_INPUT,
    value
    }
)