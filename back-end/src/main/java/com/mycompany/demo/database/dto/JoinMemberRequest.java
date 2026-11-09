package com.mycompany.demo.database.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class JoinMemberRequest {
    private String memberId;
    private String memberName;
    private String password;
    private String email;
}
