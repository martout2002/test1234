import { supabase } from './supabase-client';

/**
 * Example: Fetch all users
 */
export async function getUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

/**
 * Example: Fetch a single user by ID
 */
export async function getUserById(id: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

/**
 * Example: Create a new user
 */
export async function createUser(userData: {
  email: string;
  name: string;
}) {
  const { data, error } = await supabase
    .from('users')
    .insert([userData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Example: Update a user
 */
export async function updateUser(id: string, updates: Partial<{
  email: string;
  name: string;
}>) {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Example: Delete a user
 */
export async function deleteUser(id: string) {
  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

/**
 * Example: Real-time subscription
 */
export function subscribeToUsers(callback: (payload: any) => void) {
  const subscription = supabase
    .channel('users-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'users' },
      callback
    )
    .subscribe();

  return () => {
    subscription.unsubscribe();
  };
}
