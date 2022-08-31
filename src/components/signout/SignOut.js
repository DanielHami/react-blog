
import { supabase } from '../../supabaseClient'

async function signout() {
      await supabase.auth.signOut()
      return signout
}

export default signout