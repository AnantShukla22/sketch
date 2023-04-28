import { gql } from "graphql-request";
export const getMember=gql`query($memType:String!) {
    memberCollection(where:{type:{title_contains:$memType}}){
      items{
        name
        type{
          title
        }
        image{
          url
        }
        email
        instagram
        domain
      }
    }
  }`;