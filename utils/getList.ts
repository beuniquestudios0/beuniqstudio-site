import supabase from "../supabase";

export const getLists = async (type: "users" | "instructors" | "invalid") => {
    try{
        const {data} = await supabase.from(type === "invalid" ? "users" : type).select();
        return data;
    }catch (error: any){
        throw new Error(error);
    }
}