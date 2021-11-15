Imports System.Security.Cryptography

Public Class CommonFns
    Public Shared Function EncryptStr(Str As String, Pwd As String) As String
        Dim wrapper As New EncryptDecrypt("Akon" & Pwd.Trim)  ' userid is password
        EncryptStr = wrapper.EncryptData(Str)
    End Function
    Public Shared Function DecryptStr(Str As String, Pwd As String) As String
        Dim wrapper As New EncryptDecrypt("Akon" & Pwd.Trim)  ' userid is password
        Try
            DecryptStr = wrapper.DecryptData(Str)
        Catch ex As System.Security.Cryptography.CryptographicException
            DecryptStr = ""
        End Try
    End Function
    Public Shared Function ValueExists(TblName As String, FldName As String, ValueToCheck As String, PrimId As String, PrimIdVal As String) As Boolean
        ValueExists = False
        Dim qry As String = ""
        qry = "select " & PrimId & " from  " & TblName & " where " & FldName & " ='" & ValueToCheck.Trim.Replace("'", "''") & "' and  " & PrimId & " <> '" & PrimIdVal & "' LIMIT 1 "
        Dim x As New LibDll.MySqlConn
        If x.GetValue(qry) = "" Then
        Else
            ValueExists = True
        End If
        x.ConnectionClose()
    End Function
    Public Shared Function ValidateEmail(ByVal strCheck As String) As Boolean
        Try
            Dim vEmailAddress As New System.Net.Mail.MailAddress(strCheck)
        Catch ex As Exception
            Return False
        End Try
        Return True
    End Function
    Public Shared Function IsValidEmailFormat(ByVal s As String) As Boolean
        Return Regex.IsMatch(s, "^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$")
    End Function
End Class
