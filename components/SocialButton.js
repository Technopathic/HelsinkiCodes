import { SiTwitter, SiGoogle, SiGithub, SiDiscord, SiTwitch, SiSpotify } from "react-icons/si";
import { createClient } from '@supabase/supabase-js'

//const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_KEY);

const SocialButton = (props) => {
    const COLOR = "#FFFFFF"
    const SIZE = 24

    const renderIcon = () => {
        if (props.provider === 'twitter') {
            return <SiTwitter color={COLOR} size={SIZE} />
        } else if (props.provider === 'google') {
            return <SiGoogle color={COLOR} size={SIZE} />
        } else if (props.provider === 'github') {
            return <SiGithub color={COLOR} size={SIZE} />
        } else if (props.provider === 'discord') {
            return <SiDiscord color={COLOR} size={SIZE} />
        } else if (props.provider === 'twitch') {
            return <SiTwitch color={COLOR} size={SIZE} />
        } else if (props.provider === 'spotify') {
            return <SiSpotify color={COLOR} size={SIZE} />
        } else {
            return <div></div>
        }
    }

    const signIn = async () => {
        /*const { user, session, error } = await supabase.auth.signIn({
            provider: props.provider
        })*/
    }
    return (
        <div className={`bg-${props.provider} w-full py-4 rounded capitalize flex justify-center items-center mb-4 cursor-pointer hover:opacity-80 transition-all select-none`} onClick={signIn}>
            {renderIcon()}
            <span className="ml-2 text-white">{props.provider}</span>
        </div>
    )
}

export default SocialButton