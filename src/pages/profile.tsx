import { useEffect, useState } from 'react'
import Avatar from '../components/Avatar/Avatar'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Router from 'next/router'
import { supabase } from '~/lib/supabase'
import { useAuth, ProtectedRoute } from '~/lib/auth'
import Layout from '~/components/Layout'
import { SpinnerFullPage } from '~/components/Spinner'
import { ROUTE_AUTH } from '~/config'
import { NextAppPageServerSideProps } from '~/types/app'

// const ProfilePage = (props) => {
const ProfilePage = ({ session }) => {
  const { user, userLoading, signOut, loggedIn } = useAuth()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    if (!userLoading && !loggedIn) {
      Router.push(ROUTE_AUTH)
    }
  }, [userLoading, loggedIn])

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (userLoading) {
    return <SpinnerFullPage />
  }

  return (
    <Layout useBackdrop={false}>
      {/* <div className="h-screen flex flex-col justify-center items-center relative">
        <h2 className="text-3xl my-4">
          Howdie, {user && user.email ? user.email : 'Explorer'}!
        </h2>
        {!user && (
          <small>
            You've landed on a protected page. Please{' '}
            <Link href="/">log in</Link> to view the page's full content{' '}
          </small>
        )}
        {user && (
          <div>
            <button
              onClick={signOut}
              className="border bg-gray-500 border-gray-600 text-white px-3 py-2 rounded w-full text-center transition duration-150 shadow-lg"
            >
              Sign Out
            </button>
          </div>
        )}
      </div> */}

      <div className="form-widget">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="website"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <Avatar
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url)
            updateProfile({ username, website, avatar_url: url })
          }}
        />

        <div>
          <button
            className="button block primary"
            onClick={() => updateProfile({ username, website, avatar_url })}
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>

        <div>
          <button
            className="button block"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage

// As there could be many pages that'll be required to be rendered only for the logged-in users, and the above logic
// for indetifying authenticity could become repetitive, there's a wrapper component `ProtectedRoute` already available
// that could be used like
/*
export const getServerSideProps: GetServerSideProps = (context) => ProtectedRoute({ context, getPropsFunc: async (options) => {
    return {
        'more': 'data'
    }
}})
*/
