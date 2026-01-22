import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const BlogComments = () => {
    return (
        <div className="bg-black/5 rounded-[4px] p-8 md:p-12 mb-16">
            <h3 className="font-playfair text-[32px] tracking-[-0.96px] text-dental-text mb-2">
                Leave a Reply
            </h3>
            <p className="font-roboto text-[16px] text-gray-600 mb-8">
                Your email address will not be published. Required fields are marked *
            </p>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                        placeholder="Name *"
                        className="bg-white border-none shadow-[1px_1px_3px_rgba(34,34,34,0.2)] h-[52px] pl-5 rounded-[4px]"
                    />
                    <Input
                        placeholder="Email *"
                        className="bg-white border-none shadow-[1px_1px_3px_rgba(34,34,34,0.2)] h-[52px] pl-5 rounded-[4px]"
                    />
                    <Input
                        placeholder="Website"
                        className="bg-white border-none shadow-[1px_1px_3px_rgba(34,34,34,0.2)] h-[52px] pl-5 rounded-[4px]"
                    />
                </div>

                <Textarea
                    placeholder="Comment *"
                    className="bg-white border-none shadow-[1px_1px_3px_rgba(34,34,34,0.2)] min-h-[228px] pl-5 pt-4 rounded-[4px] resize-none"
                />

                <div className="flex items-center space-x-3">
                    <Checkbox id="save-info" className="w-6 h-6 rounded-full border-gray-300 data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-gradient-blue-start data-[state=checked]:via-gradient-blue-mid data-[state=checked]:to-gradient-blue-end data-[state=checked]:border-transparent" />
                    <Label htmlFor="save-info" className="font-roboto text-[16px] text-gray-600 font-normal cursor-pointer">
                        Save my name, email, and website in this browser for the next time I comment.
                    </Label>
                </div>

                <Button
                    type="submit"
                    className="w-[160px] h-[52px] bg-gradient-to-br from-gradient-blue-start via-gradient-blue-mid to-gradient-blue-end hover:opacity-90 text-white font-roboto-condensed font-bold text-[14px] uppercase tracking-widest rounded-[4px] flex items-center justify-center gap-2"
                >
                    Post Comment
                    <Send className="w-4 h-4" />
                </Button>
            </form>
        </div>
    );
};

export default BlogComments;
