export interface TeamMember {
    name: string;
    role:string;
    imageUrl: string;
  }
  
  const teamMembers: TeamMember[] = [
    {
      name: 'Natalie Carter',
      role: 'Customer Success Agent',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60'
    },
    {
      name: 'Lucy Gray',
      role: 'Customer Success Lead',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60'
    },
    {
      name: 'Olivia Martinez',
      role: 'Payments Support',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60'
    },
    {
      name: 'Richard Mills',
      role: 'Payments Support',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60'
    },
    
   
  ];
  
  export default teamMembers;
  