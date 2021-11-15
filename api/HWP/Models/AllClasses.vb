Public Class UserLogin
    Public UserID As Int32 = 0
    Public LoginTime As DateTime
End Class
Public Class qtype
    Public QuesTypeID As Int32 = 0
    Public QType As String = ""
    Public Function Add(qt As qtype) As Int32
        Add = 0
        If qt.QType = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If qt.QuesTypeID = 0 Then
            qry = "insert into questype (QType) values ('" & qt.QType.Trim.Replace("'", "''") & "' ) ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update questype set UpdatedOn=NOW(), QType = '" & qt.QType.Trim.Replace("'", "''") & "' where QuesTypeID = '" & qt.QuesTypeID & "'"
            Try
                x.UpdateRecord(qry)
                Add = qt.QuesTypeID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(QtypeId As Int32) As Int32
        Delete = 0
        If QtypeId = 0 Then Exit Function
        Dim qry As String = "delete from questype  where QuesTypeID = '" & QtypeId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class
Public Class FaqSections
    Public FaqSectID As Int32 = 0
    Public FaqSect As String = ""
    Public Function Add(fs As FaqSections) As Int32
        Add = 0
        If fs.FaqSect = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If fs.FaqSectID = 0 Then
            qry = "insert into faqsections (FaqSection) values ('" & fs.FaqSect.Trim.Replace("'", "''") & "' ) ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update faqsections set UpdatedOn=NOW(), FaqSection = '" & fs.FaqSect.Trim.Replace("'", "''") & "' where FaqSectionID = '" & fs.FaqSectID & "'"
            Try
                x.UpdateRecord(qry)
                Add = fs.FaqSectID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(FaqSectID As Int32) As Int32
        Delete = 0
        If FaqSectID = 0 Then Exit Function
        Dim qry As String = "delete from faqsections  where FaqSectionID = '" & FaqSectID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class

Public Class Faqs
    Public SiteSectId As Int32 = 0
    Public FaqId As Int32 = 0
    Public Que As String = ""
    Public Ans As String = ""
    Public Function Add(f As Faqs) As Int32
        Add = 0
        If f.SiteSectId = 0 Then Exit Function
        If f.Que.Trim = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.FaqId = 0 Then
            qry = "insert into `faq`(`Question`, `Answer`, `SiteSectID`) VALUES ( '" & f.Que.Trim.Replace("'", "''") & "','" & f.Ans.Trim.Replace("'", "''") & "', '" & f.SiteSectId & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update faq set LastUpdated=NOW(), SiteSectID = '" & f.SiteSectId & "' "
            qry = qry & ",  Question = '" & f.Que.Trim.Replace("'", "''") & "'"
            qry = qry & ",  Answer = '" & f.Ans.Trim.Replace("'", "''") & "'"
            qry = qry & " where faqid = '" & f.FaqId & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.FaqId
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(FaqID As Int32) As Int32
        Delete = 0
        If FaqID = 0 Then Exit Function
        Dim qry As String = "delete from faq  where FaqID = '" & FaqID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class

Public Class Sections
    Public SectID As Int32 = 0
    Public ProgramID As Int32 = 0
    Public SectNo As String = ""
    Public SectName As String = ""
    Public Function Add(f As Sections) As Int32
        Add = 0
        If f.ProgramID = 0 Then Exit Function
        If f.SectName.Trim = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.SectID = 0 Then
            qry = "INSERT INTO `sections`(  `SectionNumber`, `SectionName`, `ProgramID`) VALUES ( '" & f.SectNo.Trim.Replace("'", "''") & "','" & f.SectName.Trim.Replace("'", "''") & "', '" & f.ProgramID & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update sections set UpdatedOn=NOW(), ProgramID = '" & f.ProgramID & "' "
            qry = qry & ",  SectionNumber = '" & f.SectNo.Trim.Replace("'", "''") & "'"
            qry = qry & ",  SectionName = '" & f.SectName.Trim.Replace("'", "''") & "'"
            qry = qry & " where Sectionid = '" & f.SectID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.SectID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(SectionID As Int32) As Int32
        Delete = 0
        If SectionID = 0 Then Exit Function
        Dim qry As String = "delete from sections  where SectionID = '" & SectionID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class


Public Class SubSections
    Public SubSectID As Int32 = 0
    Public SectID As Int32 = 0
    Public SubSectNo As String = ""
    Public SubSectName As String = ""
    Public Function Add(f As SubSections) As Int32
        Add = 0
        If f.SectID = 0 Then Exit Function
        If f.SubSectName.Trim = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.SubSectID = 0 Then
            qry = "INSERT INTO `subsection`( `SubSectionNo`, `SubSectName`, `SectionID`) VALUES  ( '" & f.SubSectNo.Trim.Replace("'", "''") & "','" & f.SubSectName.Trim.Replace("'", "''") & "', '" & f.SectID & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update SubSections set UpdatedOn=NOW(), SectionId = '" & f.SectID & "' "
            qry = qry & ",  SubSectionNo = '" & f.SubSectNo.Trim.Replace("'", "''") & "'"
            qry = qry & ",  SubSectionName = '" & f.SubSectName.Trim.Replace("'", "''") & "'"
            qry = qry & " where SubSectionid = '" & f.SubSectID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.SubSectID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(SubSectionID As Int32) As Int32
        Delete = 0
        If SubSectionID = 0 Then Exit Function
        Dim qry As String = "delete from SubSections  where SubSectionID = '" & SubSectionID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class
Public Class Program
    Public ProgID As Int32 = 0
    Public Program As String = ""
    Public Function Add(p As Program) As Int32
        Add = 0
        If p.Program = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If p.ProgID = 0 Then
            qry = "insert into program (Name) values ('" & p.Program.Trim.Replace("'", "''") & "' ) ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update program set UpdatedOn=NOW(), Name = '" & p.Program.Trim.Replace("'", "''") & "' where ProgramID = '" & p.ProgID & "'"
            Try
                x.UpdateRecord(qry)
                Add = p.ProgID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(ProgramId As Int32) As Int32
        Delete = 0
        If ProgramId = 0 Then Exit Function
        Dim qry As String = "delete from program  where ProgramID = '" & ProgramId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class


Public Class Rate
    Public RateID As Int32 = 0
    Public ProgID As Int32 = 0
    Public CountryID As String = ""
    Public Mly As Single = 0
    Public Yly As Single = 0
    Public Current As Int16 = 0
    Public Function Add(p As Rate) As Int32
        Add = 0
        If p.ProgID = 0 Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If p.RateID = 0 Then
            qry = "INSERT INTO `rate`( `ProgramID`, `CountryID`, `Monthly`, `Annual`, `Current`) VALUES  ('" & p.ProgID & "','" & p.CountryID.Trim.Replace("'", "''") & "','" & p.Mly & "','" & p.Yly & "', '" & p.Current & "' ) ; Select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update rate Set UpdatedOn=NOW(), CountryID = '" & p.CountryID.Trim.Replace("'", "''") & "'"
            qry = qry & ", Monthly = '" & p.Mly & "' "
            qry = qry & ", Annual = '" & p.Yly & "' "
            qry = qry & ", Current = '" & p.Current & "' "
            qry = qry & " where RateID = '" & p.RateID & "'"
            Try
                x.UpdateRecord(qry)
                Add = p.RateID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(RateId As Int32) As Int32
        Delete = 0
        If RateId = 0 Then Exit Function
        Dim qry As String = "delete from rate  where RateID = '" & RateId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class

Public Class Reflections
    Public ReflectionId As Int32 = 0
    Public ProgID As Int32 = 0
    Public SectID As Int32 = 0
    Public Que As String = ""
    Public Function Add(f As Reflections) As Int32
        Add = 0
        'If f.SectID = 0 Then Exit Function
        If f.Que.Trim = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.ReflectionId = 0 Then
            qry = "INSERT INTO `Reflections`( `Question`,`ProgramID`, `SectionID` ) VALUES  ( '" & f.Que.Trim.Replace("'", "''") & "','" & f.ProgID & "', '" & f.SectID & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update Reflections set UpdatedOn=NOW(), SectionId = '" & f.SectID & "' "
            qry = qry & ",  ProgramID = '" & f.ProgID & "'"
            qry = qry & ",  Question = '" & f.Que.Trim.Replace("'", "''") & "'"
            qry = qry & " where ReflectionId = '" & f.ReflectionId & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.ReflectionId
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(ReflectionId As Int32) As Int32
        Delete = 0
        If ReflectionId = 0 Then Exit Function
        Dim qry As String = "delete from Reflections  where ReflectionId = '" & ReflectionId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class


Public Class UserReflections
    Public UserReflectionId As Int32 = 0
    Public SubscriberID As Int32 = 0
    Public Resp As String = ""
    Public Function Add(f As UserReflections) As Int32
        Add = 0
        If f.SubscriberID = 0 Then Exit Function
        If f.Resp.Trim = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.UserReflectionId = 0 Then
            qry = "INSERT INTO `UserReflections`( `Response` ,`SubscriberID` ) VALUES  ( '" & f.Resp.Trim.Replace("'", "''") & "','" & f.SubscriberID & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update UserReflections set UpdatedOn=NOW() "
            qry = qry & ",  SubscriberID = '" & f.SubscriberID & "'"
            qry = qry & ",  Response = '" & f.Resp.Trim.Replace("'", "''") & "'"
            qry = qry & " where UserReflectionId = '" & f.UserReflectionId & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.UserReflectionId
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(UserReflectionId As Int32) As Int32
        Delete = 0
        If UserReflectionId = 0 Then Exit Function
        Dim qry As String = "delete from UserReflections  where UserReflectionId = '" & UserReflectionId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class

Public Class Communitys
    Public CommunityId As Int32 = 0
    Public Name As String = ""
    Public Descr As String = ""
    Public CreatedBy As Int32 = 0
    Public Function Add(f As Communitys) As Int32
        Add = 0
        If f.Name.Trim = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.CommunityId = 0 Then
            qry = "INSERT INTO `Community`( `Name` ,`Description` ) VALUES  ( '" & f.Name.Trim.Replace("'", "''") & "','" & f.Descr.Trim.Replace("'", "''") & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update Community set UpdatedOn=NOW() "
            qry = qry & ",  Name = '" & f.Name.Trim.Replace("'", "''") & "'"
            qry = qry & ",  Description = '" & f.Descr.Trim.Replace("'", "''") & "'"
            qry = qry & " where CommunityId = '" & f.CommunityId & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.CommunityId
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(CommunityId As Int32) As Int32
        Delete = 0
        If CommunityId = 0 Then Exit Function
        Dim qry As String = "delete from Community  where CommunityId = '" & CommunityId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class


Public Class SubScriptions
    Public SubscrID As Int32 = 0
    Public ProgramID As Int32 = 0
    Public UserID As Int32 = 0
    Public StartDate As String = ""
    Public EndDate As String = ""
    Public Active As Int16 = "1"
    Public Amount As Single = 0
    Public AutoRenew As Int16 = 0
    Public DiscCodeUsed As Int16 = 0
    Public Disc As Single = 0
    Public Function Add(f As SubScriptions) As Int32
        Add = 0
        If f.ProgramID = 0 Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.SubscrID = 0 Then
            qry = "INSERT INTO `subscription`( `ProgramID`, `UserID`, `StartDate`, `EndDate`, `Active`, `Amount`, `AutoRenew`, `DiscountCodeUsed`, `Discount`) VALUES   ( "
            qry = qry & "'" & f.ProgramID & "', '" & f.UserID & "', '" & f.StartDate & "','" & f.EndDate & "','" & f.Active & "','" & f.Amount & "','" & f.AutoRenew & "','" & f.DiscCodeUsed & "','" & f.Disc & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update subscription set UpdatedOn=NOW() "
            qry = qry & ",  ProgramID = '" & f.ProgramID & "'"
            qry = qry & ",  UserID = '" & f.UserID & "'"
            qry = qry & ",  StartDate = '" & f.StartDate & "'"
            qry = qry & ",  EndDate = '" & f.EndDate & "'"
            qry = qry & ",  Active = '" & f.Active & "'"
            qry = qry & ",  Amount = '" & f.Amount & "'"
            qry = qry & ",  AutoRenew = '" & f.AutoRenew & "'"
            qry = qry & ",  DiscountCodeUsed = '" & f.DiscCodeUsed & "'"
            qry = qry & ",  Discount = '" & f.Disc & "'"
            qry = qry & " where SubscrID = '" & f.SubscrID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.SubscrID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(SubscrID As Int32) As Int32
        Delete = 0
        If SubscrID = 0 Then Exit Function
        Dim qry As String = "delete from subscription  where SubscrID = '" & SubscrID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class


Public Class Journal
    Public JournalId As Int32 = 0
    Public ModuleID As Int32 = 0
    Public JDate As String = ""
    Public Notes As String = ""
    Public UserId As Int32 = 0
    Public Function Add(f As Journal) As Int32
        Add = 0
        If f.ModuleID = 0 Then Exit Function
        If f.Notes.Trim = "" Then Exit Function
        Dim qry As String = ""
            Dim x As New LibDll.MySqlConn
        If f.JournalId = 0 Then
            qry = "INSERT INTO `journal`( `UserID`, `Date`, `ModuleID`, `Notes` )  VALUES  ( '" & f.UserId & "','" & f.JDate.Trim & "','" & f.ModuleID & "','" & f.Notes.Trim.Replace("'", "''") & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update journal set UpdatedOn=NOW() "
            qry = qry & ",  Date = '" & f.JDate.Trim.Replace("'", "''") & "'"
            qry = qry & ",  ModuleID = '" & f.ModuleID & "'"
            qry = qry & ",  Notes = '" & f.Notes.Trim.Replace("'", "''") & "'"
            qry = qry & " where JournalID = '" & f.JournalId & "'"
            Try
                    x.UpdateRecord(qry)
                Add = f.JournalId
            Catch ex As Exception
                    Add = 0
                End Try
            End If
            x.ConnectionClose()
    End Function
    Public Function Delete(JournalId As Int32) As Int32
        Delete = 0
        If JournalId = 0 Then Exit Function
        Dim qry As String = "delete from journal  where JournalId = '" & JournalId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class

Public Class SiteSections
    Public SiteSectID As Int32 = 0
    Public SiteSect As String = ""
    Public Function Add(fs As SiteSections) As Int32
        Add = 0
        If fs.SiteSect = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If fs.SiteSectID = 0 Then
            qry = "insert into sitesections (SiteSection) values ('" & fs.SiteSect.Trim.Replace("'", "''") & "' ) ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update sitesections set UpdatedOn=NOW(), SiteSection = '" & fs.SiteSect.Trim.Replace("'", "''") & "' where SiteSectionID = '" & fs.SiteSectID & "'"
            Try
                x.UpdateRecord(qry)
                Add = fs.SiteSectID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(SiteSectID As Int32) As Int32
        Delete = 0
        If SiteSectID = 0 Then Exit Function
        Dim qry As String = "delete from sitesections  where SiteSectionID = '" & SiteSectID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class



Public Class Modules
    Public ModuleID As Int32 = 0
    Public SectionID As Int32 = 0
    Public ModuleNumber As String = ""
    Public ModuleName As String = ""
    Public Function Add(f As Modules) As Int32
        Add = 0
        If f.SectionID = 0 Then Exit Function
        If f.ModuleName.Trim = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.ModuleID = 0 Then
            qry = "INSERT INTO `module`( `ModuleNumber`, `ModuleName`, `SectionID`) VALUES ( '" & f.ModuleNumber.Trim.Replace("'", "''") & "','" & f.ModuleName.Trim.Replace("'", "''") & "', '" & f.SectionID & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update module set UpdatedOn=NOW(), SectionID = '" & f.SectionID & "' "
            qry = qry & ",  ModuleNumber = '" & f.ModuleNumber.Trim.Replace("'", "''") & "'"
            qry = qry & ",  ModuleName = '" & f.ModuleName.Trim.Replace("'", "''") & "'"
            qry = qry & " where ModuleID = '" & f.ModuleID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.ModuleID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(ModuleID As Int32) As Int32
        Delete = 0
        If ModuleID = 0 Then Exit Function
        Dim qry As String = "delete from module  where ModuleID = '" & ModuleID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class




'Public Class Questions
'    Public QuestionID As Int32 = 0
'    Public QuesTypeID As Int32 = 0
'    Public SectionID As Int32 = 0
'    Public Question As String = ""
'    Public Function Add(f As Questions) As Int32
'        Add = 0
'        If f.QuesTypeID = 0 Then Exit Function
'        If f.SectionID = 0 Then Exit Function
'        If f.Question.Trim = "" Then Exit Function
'        Dim qry As String = ""
'        Dim x As New LibDll.MySqlConn
'        If f.QuestionID = 0 Then
'            qry = "INSERT INTO `questions`( `Question`, `QuesTypeID`, `SectionID` ) VALUES ( '" & f.Question.Trim.Replace("'", "''") & "','" & f.QuesTypeID & "', '" & f.SectionID & "' )  ; select @@identity; "
'            Add = x.InsertRecord(qry)
'        Else
'            qry = "update questions set UpdatedOn=NOW() "
'            qry = qry & ",  SectionID = '" & f.SectionID & "'"
'            qry = qry & ",  QuesTypeID = '" & f.QuesTypeID & "'"
'            qry = qry & ",  Question = '" & f.Question.Trim.Replace("'", "''") & "'"
'            qry = qry & " where QuestionID = '" & f.QuestionID & "'"
'            Try
'                x.UpdateRecord(qry)
'                Add = f.QuestionID
'            Catch ex As Exception
'                Add = 0
'            End Try
'        End If
'        x.ConnectionClose()
'    End Function
'    Public Function Delete(QuestionID As Int32) As Int32
'        Delete = 0
'        If QuestionID = 0 Then Exit Function
'        Dim qry As String = "delete from questions  where QuestionID = '" & QuestionID & "'"
'        Dim x As New LibDll.MySqlConn
'        Try
'            x.UpdateRecord(qry)
'            Delete = 1
'        Catch ex As Exception
'        End Try
'        x.ConnectionClose()
'    End Function
'End Class


Public Class Options
    Public OptionID As Int32 = 0
    Public OptionStr As String = ""
    Public QuestionID As Int32 = 0
    Public CorrectAnswer As String = ""
    Public OptionType As String = ""
    Public Points As Int32 = 0
    Public Function Add(f As Options) As Int32
        Add = 0
        If f.QuestionID = 0 Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.OptionID = 0 Then
            qry = "INSERT INTO `options`(`OptionStr`, `QuestionID`, `CorrectAnswer`, `OptionType`, `Points`) VALUES ( '" & f.OptionStr.Trim.Replace("'", "''") & "','" & f.QuestionID & "', '" & f.CorrectAnswer.Trim.Replace("'", "''") & "','" & f.OptionType.Trim.Replace("'", "''") & "','" & f.Points & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update options set UpdatedOn=NOW(), QuestionID = '" & f.QuestionID & "' "
            qry = qry & ",  CorrectAnswer = '" & f.CorrectAnswer.Trim.Replace("'", "''") & "'"
            qry = qry & ",  OptionStr = '" & f.OptionStr.Trim.Replace("'", "''") & "'"
            qry = qry & ",  OptionType = '" & f.OptionType.Trim.Replace("'", "''") & "'"
            qry = qry & ",  Points = '" & f.Points & "'"
            qry = qry & " where OptionID = '" & f.OptionID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.OptionID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(OptionID As Int32) As Int32
        Delete = 0
        If OptionID = 0 Then Exit Function
        Dim qry As String = "delete from options  where OptionID = '" & OptionID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class


Public Class UserResponses
    Public UserResponseID As Int32 = 0
    Public UserID As Int32 = 0
    Public OptionID As Int32 = 0
    Public Function Add(f As UserResponses) As Int32
        Add = 0
        If f.OptionID = 0 Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.UserResponseID = 0 Then
            qry = "INSERT INTO `userresponse`( `UserID`, `OptionID` ) VALUES ( '" & f.UserID & "','" & f.OptionID & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update userresponse set UpdatedOn=NOW(), UserID = '" & f.UserID & "' "
            qry = qry & ",  OptionID = '" & f.OptionID & "'"
            qry = qry & " where UserResponseID = '" & f.UserResponseID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.UserResponseID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(UserResponseID As Int32) As Int32
        Delete = 0
        If UserResponseID = 0 Then Exit Function
        Dim qry As String = "delete from userresponse  where UserResponseID = '" & UserResponseID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
End Class
Public Class Users
    Public UserID As Int32 = 0
    Public RoleID As Int32 = 0
    Public FName As String = ""
    Public LName As String = ""
    Public Email As String = ""
    Public Pwd As String = ""
    Public DOJ As String = ""
    Public Function Add(f As Users) As String
        Add = "0"
        If f.RoleID = 0 Then Exit Function
        Dim qry As String = ""
        Dim mUsrId As String
        Dim x As New LibDll.MySqlConn
        If f.UserID = 0 Then
            mUsrId = x.GetValue("select UserID from users where  Email = '" & f.Email.Trim.Replace("'", "''") & "' LIMIT 1 ")
            If mUsrId = "" Then
                qry = "INSERT INTO `users`( `FName`, `LName`, `Email`, `DOJ`,`RoleId`, `Password` ) VALUES ( '" & f.FName.Trim.Replace("'", "''") & "' "
                qry = qry & ",'" & f.LName.Trim.Replace("'", "''") & "'  "
                qry = qry & ",'" & f.Email.Trim.Replace("'", "''") & "'  "
                qry = qry & ",'" & f.DOJ.Trim.Replace("'", "''") & "'   "
                qry = qry & ",'" & f.RoleID & "'   "
                qry = qry & ",'" & f.Pwd.Trim.Replace("'", "''") & "' )  ; select @@identity; "
                Add = x.InsertRecord(qry)
            Else
                Add = "Email already Exists."
            End If
        Else
            mUsrId = x.GetValue("select top 1 UserID from users where UserID<> '" & f.UserID & "' and   Email = '" & f.Email.Trim.Replace("'", "''") & "'   LIMIT 1 ")
            If mUsrId = "" Then
                qry = "update users set UpdatedOn=NOW(), RoleId = '" & f.RoleID & "' "
                qry = qry & ", fname = '" & f.FName.Trim.Replace("'", "''") & "'  "
                qry = qry & ", lname = '" & f.LName.Trim.Replace("'", "''") & "'  "
                qry = qry & ", email = '" & f.Email.Trim.Replace("'", "''") & "'  "
                qry = qry & ", DOJ = '" & f.DOJ.Trim.Replace("'", "''") & "'   "
                qry = qry & ", Password = '" & f.Pwd.Trim.Replace("'", "''") & "'   "
                qry = qry & " where UserID = '" & f.UserID & "'"
                Try
                    x.UpdateRecord(qry)
                    Add = f.UserID.ToString
                Catch ex As Exception
                    Add = "0"
                End Try
            Else
                Add = "Email already Exists."
            End If
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(UserID As Int32) As Int32
        Delete = 0
        If UserID = 0 Then Exit Function
        Dim qry As String = "delete from users  where UserID = '" & UserID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetUsers() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `UserID`, `RoleId`, `FName`, `LName`, `Email`, `DOJ`  FROM `users` WHERE 1 order by 1,2 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .UserID = row(0),
            Key .RoleId = row(1).ToString(),
            Key .FName = row(2).ToString(),
            Key .LName = row(3).ToString(),
            Key .Email = row(4).ToString(),
            Key .DOJ = row(5).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class

Public Class Settings
    Public SettingID As Int32 = 0
    Public SettingName As String = ""
    Public Value As String = ""
    Public Function Add(f As Settings) As String
        Add = "0"
        Dim qry As String = ""
        Dim mSetId As String
        Dim x As New LibDll.MySqlConn
        If f.SettingID = 0 Then
            mSetId = x.GetValue("select GSetID from globalsettings where  SettingName = '" & f.SettingName.Trim.Replace("'", "''") & "' LIMIT 1 ")
            If mSetId = "" Then
                qry = "INSERT INTO `globalsettings`( `SettingName`, `Value` ) VALUES ( '" & f.SettingName.Trim.Replace("'", "''") & "' "
                qry = qry & ",'" & f.Value.Trim.Replace("'", "''") & "' )  ; select @@identity; "
                Add = x.InsertRecord(qry)
            Else
                Add = "Global Setting Name already Exists."
            End If
        Else
            mSetId = x.GetValue("select top 1 GSetID from globalsettings where GSetID <> '" & f.SettingID & "' and   SettingName = '" & f.SettingName.Trim.Replace("'", "''") & "'   LIMIT 1 ")
            If mSetId = "" Then
                qry = "update globalsettings set UpdatedOn=NOW() "
                qry = qry & ", SettingName = '" & f.SettingName.Trim.Replace("'", "''") & "'  "
                qry = qry & ", Value = '" & f.Value.Trim.Replace("'", "''") & "'   "
                qry = qry & " where GSetID = '" & f.SettingID & "'"
                Try
                    x.UpdateRecord(qry)
                    Add = f.SettingID.ToString
                Catch ex As Exception
                    Add = "0"
                End Try
            Else
                Add = "Global Setting Name already Exists."
            End If
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(SettingID As Int32) As Int32
        Delete = 0
        If SettingID = 0 Then Exit Function
        Dim qry As String = "delete from globalsettings  where GSetID = '" & SettingID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetSettings() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `GSetID`, `SettingName`, `Value`  FROM `globalsettings` WHERE 1 order by 2,1 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .SettingID = row(0),
            Key .SettingName = row(1).ToString(),
            Key .Value = row(2).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class

Public Class AssType
    Public AssTypeId As Int32 = 0
    '    Public SectionId As Int16 = 0
    Public AssType As String = ""
    Public Function Add(qt As AssType) As String
        Add = 0
        If qt.AssType = "" Then
            Return "Assessment Type Name ?"
            Exit Function
        End If
        'If qt.SectionId = 0 Then
        '    Return "Section Id ?"
        '    Exit Function
        'End If
        Dim qry As String = ""
        Dim mAssTypeId As String = ""
        Dim x As New LibDll.MySqlConn
        If qt.AssTypeId = 0 Then
            mAssTypeId = x.GetValue("select AssesTypeID from AssessmentTypes where  AssessmentType = '" & qt.AssType.Trim.Replace("'", "''") & "' LIMIT 1 ")
            If mAssTypeId = "" Then
                qry = "INSERT INTO `AssessmentTypes`( `AssessmentType` ) VALUES ( '" & qt.AssType.Trim.Replace("'", "''") & "'  )  ; select @@identity; "
                'qry = qry & " )  ; select @@identity; "
                Add = x.InsertRecord(qry)
            Else
                Add = "Assessment Type Name already Exists."
            End If
        Else
            mAssTypeId = x.GetValue("select top 1 AssesTypeID from AssessmentTypes where AssesTypeID <> '" & qt.AssTypeId & "' and   AssessmentType = '" & qt.AssType.Trim.Replace("'", "''") & "'   LIMIT 1 ")
            If mAssTypeId = "" Then
                qry = "update AssessmentTypes set UpdatedOn=NOW() "
                qry = qry & ", AssessmentType = '" & qt.AssType.Trim.Replace("'", "''") & "'  "
                'qry = qry & ", SectionID = '" & qt.SectionId & "'   "
                qry = qry & " where AssesTypeID = '" & qt.AssTypeId & "'"
                Try
                    x.UpdateRecord(qry)
                    Add = qt.AssTypeId.ToString
                Catch ex As Exception
                    Add = "0"
                End Try
            Else
                Add = "Assessment Type Name already Exists."
            End If
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(AssTypeId As Int32) As Int32
        Delete = 0
        If AssTypeId = 0 Then Exit Function
        Dim qry As String = "delete from AssessmentTypes  where AssesTypeID = '" & AssTypeId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetAssTypes() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `AssesTypeID`, `AssessmentType`  FROM `AssessmentTypes` WHERE 1 order by 2 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .AssTypeId = row(0),
            Key .AssType = row(1).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetAssTypes(AssTypeId As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `AssesTypeID`, `AssessmentType`  FROM `AssessmentTypes` WHERE AssesTypeID= '" & AssTypeId & "'  ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .AssTypeId = row(0),
            Key .AssType = row(1).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class


Public Class Questions
    Public QuestionID As Int32 = 0
    Public AssessmentID As Int32 = 0
    Public Question As String = ""
    Public Function Add(f As Questions) As Int32
        Add = 0
        If f.AssessmentID = 0 Then Exit Function
        If f.Question.Trim = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.QuestionID = 0 Then
            qry = "INSERT INTO `questions`( `Question`, `AssessmentID` ) VALUES ( '" & f.Question.Trim.Replace("'", "''") & "','" & f.AssessmentID & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update questions set UpdatedOn=NOW() "
            qry = qry & ",  AssessmentID = '" & f.AssessmentID & "'"
            qry = qry & ",  Question = '" & f.Question.Trim.Replace("'", "''") & "'"
            qry = qry & " where QuestionID = '" & f.QuestionID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.QuestionID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(QuestionID As Int32) As Int32
        Delete = 0
        If QuestionID = 0 Then Exit Function
        Dim qry As String = "delete from questions  where QuestionID = '" & QuestionID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetQuestions() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `QuestionID`, `AssessmentID`, `Question`  FROM `questions`  order by 1")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .QueId = row(0),
            Key .AssessID = row(1).ToString(),
            Key .Que = row(2).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetQuestions(AssessID As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `QuestionID`, `AssessmentID`, `Question`  FROM `questions`  WHERE AssessmentID = '" & AssessID & "'  ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .QueId = row(0),
            Key .AssessID = row(1).ToString(),
            Key .Que = row(2).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function

End Class



Public Class Assessment
    Public AssessmentId As Int32 = 0
    Public SectionId As Int16 = 0
    Public Assessment As String = ""
    Public AssesTypeID As Int32 = 0
    Public Function Add(qt As Assessment) As String
        Add = 0
        If qt.Assessment = "" Then
            Return "Assessment Name ?"
            Exit Function
        End If
        If qt.SectionId = 0 Then
            Return "Section Id ?"
            Exit Function
        End If
        Dim qry As String = ""
        Dim mAssessmentId As String = ""
        Dim x As New LibDll.MySqlConn
        If qt.AssessmentId = 0 Then
            mAssessmentId = x.GetValue("select AssessmentID from assessment where  assessment = '" & qt.Assessment.Trim.Replace("'", "''") & "' LIMIT 1 ")
            If mAssessmentId = "" Then
                qry = "INSERT INTO `assessment`( `assessment`,`AssesTypeID`, `SectionID` ) VALUES ( '" & qt.Assessment.Trim.Replace("'", "''") & "' " '
                qry = qry & ",'" & qt.AssesTypeID & "' "
                qry = qry & ",'" & qt.SectionId & "' )  ; select @@identity; "
                Add = x.InsertRecord(qry)
            Else
                Add = "Assessment Name already Exists."
            End If
        Else
            mAssessmentId = x.GetValue("select top 1 AssessmentID from assessment where AssessmentID <> '" & qt.AssessmentId & "' and   assessment = '" & qt.Assessment.Trim.Replace("'", "''") & "'   LIMIT 1 ")
            If mAssessmentId = "" Then
                qry = "update assessment set UpdatedOn=NOW() "
                qry = qry & ", assessment = '" & qt.Assessment.Trim.Replace("'", "''") & "'  "
                qry = qry & ", SectionID = '" & qt.SectionId & "'   "
                qry = qry & ", AssesTypeID = '" & qt.AssesTypeID & "' "
                qry = qry & " where AssessmentID = '" & qt.AssessmentId & "'"
                Try
                    x.UpdateRecord(qry)
                    Add = qt.AssessmentId.ToString
                Catch ex As Exception
                    Add = "0"
                End Try
            Else
                Add = "Assessment  Name already Exists."
            End If
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(AssessmentId As Int32) As Int32
        Delete = 0
        If AssessmentId = 0 Then Exit Function
        Dim qry As String = "delete from assessment  where AssessmentID = '" & AssessmentId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetAssessments() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `AssessmentID`, `assessment`,AssesTypeID, SectionId  FROM `assessment` WHERE 1 order by 2 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .AssessmentId = row(0),
            Key .Assessment = row(1).ToString(),
            Key .AssTypeId = row(2).ToString(),
            Key .SectionId = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetAssessments(AssessmentId As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `AssessmentID`, `assessment` , AssesTypeID,  SectionId FROM `assessment` WHERE AssessmentID= '" & AssessmentId & "'  ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .AssessmentId = row(0),
            Key .Assessment = row(1).ToString(),
              Key .AssTypeId = row(2).ToString(),
            Key .SectionId = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class


Public Class DiscCat
    Public DiscCatId As Int32 = 0
    Public DiscCat As String = ""
    Public Function Add(qt As DiscCat) As String
        Add = 0
        If qt.DiscCat = "" Then
            Return "Discussion Category ?"
            Exit Function
        End If
        Dim qry As String = ""
        Dim mDiscCatId As String = ""
        Dim x As New LibDll.MySqlConn
        If qt.DiscCatId = 0 Then
            mDiscCatId = x.GetValue("select DiscCatID from discussioncat where  DiscCat = '" & qt.DiscCat.Trim.Replace("'", "''") & "' LIMIT 1 ")
            If mDiscCatId = "" Then
                qry = "INSERT INTO `discussioncat`( `DiscCat` ) VALUES ( '" & qt.DiscCat.Trim.Replace("'", "''") & "'  )  ; select @@identity; "
                Add = x.InsertRecord(qry)
            Else
                Add = "Discussion Category already Exists."
            End If
        Else
            mDiscCatId = x.GetValue("select top 1 DiscCatID from discussioncat where DiscCatID <> '" & qt.DiscCatId & "' and   DiscCat = '" & qt.DiscCat.Trim.Replace("'", "''") & "'   LIMIT 1 ")
            If mDiscCatId = "" Then
                qry = "update discussioncat set UpdatedOn=NOW() "
                qry = qry & ", DiscCat = '" & qt.DiscCat.Trim.Replace("'", "''") & "'  "
                qry = qry & " where DiscCatID = '" & qt.DiscCatId & "'"
                Try
                    x.UpdateRecord(qry)
                    Add = qt.DiscCatId.ToString
                Catch ex As Exception
                    Add = "0"
                End Try
            Else
                Add = "Discussion Category already Exists."
            End If
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(DiscCatId As Int32) As Int32
        Delete = 0
        If DiscCatId = 0 Then Exit Function
        Dim qry As String = "delete from discussioncat  where DiscCatID = '" & DiscCatId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetDiscCats() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `DiscCatID`, `DiscCat`  FROM `discussioncat` WHERE 1 order by 2 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .DiscCatId = row(0),
            Key .DiscCat = row(1).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetDiscCats(DiscCatId As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `DiscCatID`, `DiscCat`  FROM `discussioncat` WHERE DiscCatID= '" & DiscCatId & "'  ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .DiscCatId = row(0),
            Key .DiscCat = row(1).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class

Public Class Tag
    Public TagId As Int32 = 0
    Public Tagname As String = ""
    Public Function Add(qt As Tag) As String
        Add = 0
        If qt.Tagname = "" Then
            Return "Tag Name ?"
            Exit Function
        End If
        Dim qry As String = ""
        Dim mTagID As String = ""
        Dim x As New LibDll.MySqlConn
        If qt.TagId = 0 Then
            mTagID = x.GetValue("select TagID from tags where  TagName = '" & qt.TagName.Trim.Replace("'", "''") & "' LIMIT 1 ")
            If mTagID = "" Then
                qry = "INSERT INTO `tags`( `TagName` ) VALUES ( '" & qt.TagName.Trim.Replace("'", "''") & "'  )  ; select @@identity; "
                Add = x.InsertRecord(qry)
            Else
                Add = "Tag Name already Exists."
            End If
        Else
            mTagID = x.GetValue("select top 1 TagID from tags where TagID <> '" & qt.TagId & "' and   TagName = '" & qt.TagName.Trim.Replace("'", "''") & "'   LIMIT 1 ")
            If mTagID = "" Then
                qry = "update tags set UpdatedOn=NOW() "
                qry = qry & ", TagName = '" & qt.TagName.Trim.Replace("'", "''") & "'  "
                qry = qry & " where TagID = '" & qt.TagId & "'"
                Try
                    x.UpdateRecord(qry)
                    Add = qt.TagId.ToString
                Catch ex As Exception
                    Add = "0"
                End Try
            Else
                Add = "Tag Name already Exists."
            End If
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(TagID As Int32) As Int32
        Delete = 0
        If TagID = 0 Then Exit Function
        Dim qry As String = "delete from tags  where TagID = '" & TagID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetTagNames() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `TagID`, `TagName`  FROM `tags` WHERE 1 order by 2 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .TagID = row(0),
            Key .TagName = row(1).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetTagNames(TagID As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `TagID`, `TagName`  FROM `tags` WHERE TagID= '" & TagID & "'  ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .TagID = row(0),
            Key .TagName = row(1).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class



Public Class WisdomGroup
    Public WGID As Int32 = 0
    Public DiscCatID As Int32 = 0
    Public Title As String = ""
    Public wgDate As String = ""
    Public CreatedBy As Int32 = "0"
    Public Approved As Int16 = 0
    Public ApprovedBy As Int32 = 0
    Public ApprovedOn As String = ""
    Public WGTypeID As Int16 = 0
    Public Program As String = ""
    ' Public Points As String = ""
    Public Closed As Int16 = 0
    Public Function Add(f As WisdomGroup) As Int32
        Add = 0
        If f.DiscCatID = 0 Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.WGID = 0 Then
            'qry = "INSERT INTO `wisdomgroup`( `DiscCatID`, `DiscTitle`, `Date`, `CreatedBy`, `ApprovedBy`, `ApprovedOn`, `WGTypeID`, `Program`, `Points`, `Closed` ) VALUES   ( "
            'qry = qry & "'" & f.DiscCatID & "', '" & f.Title.Trim.Replace("'", "''") & "', '" & f.wgDate & "','" & f.CreatedBy & "','" & f.ApprovedBy & "','" & f.ApprovedOn & "','" & f.WGTypeID & "','" & f.Program.Trim.Replace("'", "''") & "','" & f.Points & "','" & f.Closed & "' )  ; select @@identity; "
            qry = "INSERT INTO `wisdomgroup`( `DiscCatID`,  `Approved`, `DiscTitle`, `Date`, `CreatedBy`, `ApprovedBy`, `ApprovedOn`, `WGTypeID`, `Program`,  `Closed` ) VALUES   ( "
            qry = qry & "'" & f.DiscCatID & "', '" & f.Approved & "','" & f.Title.Trim.Replace("'", "''") & "', '" & f.wgDate & "','" & f.CreatedBy & "','" & f.ApprovedBy & "','" & f.ApprovedOn & "','" & f.WGTypeID & "','" & f.Program.Trim.Replace("'", "''") & "','" & f.Closed & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update wisdomgroup set UpdatedOn=NOW() "
            qry = qry & ",  DiscCatID = '" & f.DiscCatID & "'"
            qry = qry & ",  Approved = '" & f.Approved & "'"
            qry = qry & ",  DiscTitle = '" & f.Title.Trim.Replace("'", "''") & "'"
            qry = qry & ",  Date = '" & f.wgDate & "'"
            qry = qry & ",  CreatedBy = '" & f.CreatedBy & "'"
            qry = qry & ",  ApprovedBy = '" & f.ApprovedBy & "'"
            qry = qry & ",  ApprovedOn = '" & f.ApprovedOn & "'"
            qry = qry & ",  WGTypeID = '" & f.WGTypeID & "'"
            qry = qry & ",  Program = '" & f.Program.Trim.Replace("'", "''") & "'"
            ' qry = qry & ",  Points = '" & f.Points & "'"
            qry = qry & ",  Closed = '" & f.Closed & "'"
            qry = qry & " where WisdomGroupID = '" & f.WGID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.WGID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(WGID As Int32) As Int32
        Delete = 0
        If WGID = 0 Then Exit Function
        Dim qry As String = "delete from wisdomgroup  where WisdomGroupID = '" & WGID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetWGs() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `WisdomGroupID`, `DiscCatID`, `DiscTitle`, `Date`, `CreatedBy`,`Approved`, `ApprovedBy`, `ApprovedOn`, `WGTypeID`, `Program`,  `Closed`  FROM `wisdomgroup` WHERE 1 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .WGID = row(0),
            Key .DiscCatId = row(1).ToString(),
            Key .Title = row(2).ToString(),
            Key .Date = row(3).ToString(),
            Key .CreatedBy = row(4).ToString(),
            Key .Approved = row(5).ToString(),
            Key .ApprovedBy = row(6).ToString(),
            Key .ApprovedOn = row(7).ToString(),
            Key .WGTypeID = row(8).ToString(),
            Key .Program = row(9).ToString(),
            Key .Closed = row(10).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetWGs(WGid As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `WisdomGroupID`, `DiscCatID`, `DiscTitle`, `Date`, `CreatedBy`,`Approved`, `ApprovedBy`, `ApprovedOn`, `WGTypeID`, `Program`, `Closed`  FROM `wisdomgroup` WHERE WisdomGroupID = '" & WGid & "'")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .WGID = row(0),
            Key .DiscCatId = row(1).ToString(),
            Key .Title = row(2).ToString(),
            Key .Date = row(3).ToString(),
            Key .CreatedBy = row(4).ToString(),
            Key .Approved = row(5).ToString(),
            Key .ApprovedBy = row(6).ToString(),
            Key .ApprovedOn = row(7).ToString(),
            Key .WGTypeID = row(8).ToString(),
            Key .Program = row(9).ToString(),
            Key .Closed = row(10).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class




Public Class Coupon
    Public CouponID As Int32 = 0
    Public CouponCode As String = ""
    Public ProgramID As Int32 = 0
    Public Percentage As Single = 0
    Public MinCartVal As Single = 0
    Public MaxUsage As Int16 = 0
    Public StartDate As String = ""
    Public EndDate As String = ""
    Public Active As Int16 = 0
    ' Public UsageCnt As String = ""
    Public Function Add(f As Coupon) As String
        Add = 0
        If f.ProgramID = 0 Then
            Return "ProgramId can not be zero"
            Exit Function
        End If
        Dim qry As String = ""
        qry = "select couponid from coupon where CouponCode ='" & f.CouponCode.Trim.Replace("'", "''") & "' and  couponid <> '" & f.CouponID & "' LIMIT 1 "
        Dim x As New LibDll.MySqlConn
        If x.GetValue(qry) = "" Then
        Else
            x.ConnectionClose()
            Return "Coupon Code is already Exists"
        End If

        If f.CouponID = 0 Then
            qry = "INSERT INTO `coupon`(`ProgramID`,`CouponCode`,  `Percentage`, `MinCartVal`, `MaxUsage`, `StartDate`, `EndDate`, `Active`) VALUES   ( "
            qry = qry & "'" & f.ProgramID & "', '" & f.CouponCode.Trim.Replace("'", "''") & "', '" & f.Percentage & "','" & f.MinCartVal & "','" & f.MaxUsage & "','" & f.StartDate & "','" & f.EndDate & "','" & f.Active & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update coupon set UpdatedOn=NOW() "
            qry = qry & ",  ProgramID = '" & f.ProgramID & "'"
            qry = qry & ",  CouponCode = '" & f.CouponCode.Trim.Replace("'", "''") & "'"
            qry = qry & ",  Percentage = '" & f.Percentage & "'"
            qry = qry & ",  MinCartVal = '" & f.MinCartVal & "'"
            qry = qry & ",  MaxUsage = '" & f.MaxUsage & "'"
            qry = qry & ",  StartDate = '" & f.StartDate & "'"
            qry = qry & ",  EndDate = '" & f.EndDate & "'"
            'qry = qry & ",  UsageCount = '" & f.UsageCnt & "'"
            qry = qry & ",  Active = '" & f.Active & "'"
            qry = qry & " where CouponID = '" & f.CouponID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.CouponID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(CouponID As Int32) As Int32
        Delete = 0
        If CouponID = 0 Then Exit Function
        Dim qry As String = "delete from coupon  where CouponID = '" & CouponID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetCoupons() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `CouponID`, `CouponCode`, `ProgramID`, `Percentage`, `MinCartVal`, `MaxUsage`, `StartDate`, `EndDate`, `Active`, `UsageCount` FROM `coupon` WHERE 1 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .CouponID = row(0),
            Key .CouponCode = row(1).ToString(),
            Key .ProgId = row(2).ToString(),
            Key .Percentage = row(3).ToString(),
            Key .MinCartVal = row(4).ToString(),
            Key .MaxUsage = row(5).ToString(),
            Key .StartDate = row(6).ToString(),
            Key .EndDate = row(7).ToString(),
            Key .Active = row(8).ToString(),
            Key .UsageCnt = row(9).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetCoupons(CouponID As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `CouponID`, `CouponCode`, `ProgramID`, `Percentage`, `MinCartVal`, `MaxUsage`, `StartDate`, `EndDate`, `Active`, `UsageCount` FROM `coupon` WHERE CouponID = '" & CouponID & "'")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .CouponID = row(0),
            Key .CouponCode = row(1).ToString(),
            Key .ProgId = row(2).ToString(),
            Key .Percentage = row(3).ToString(),
            Key .MinCartVal = row(4).ToString(),
            Key .MaxUsage = row(5).ToString(),
            Key .StartDate = row(6).ToString(),
            Key .EndDate = row(7).ToString(),
            Key .Active = row(8).ToString(),
            Key .UsageCnt = row(9).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class





Public Class scenarios
    Public ScenarioID As Int32 = 0
    Public Title As String = ""
    Public Story As String = ""
    Public View As String = ""
    Public KeyTakeAway As String = ""
    Public ExclFromChild As Int16 = 0
    Public TagIDs As String = ""
    Public Function Add(f As scenarios) As String
        Add = 0
        If f.Title = "" Then
            Return "Title can not be blank"
            Exit Function
        End If
        If CommonFns.ValueExists("scenarios", "Title", f.Title, "ScenarioID", f.ScenarioID) Then
            Return "Title already exists"
            Exit Function
        End If
        Dim qry As String = ""
        Dim mScId As String = ""
        Dim x As New LibDll.MySqlConn
        If f.ScenarioID = 0 Then
            qry = "INSERT INTO `scenarios`( `TagIDs`, `Title`, `Story`, `View`, `KeyTakeAway`, `ExclFromChild` ) VALUES   ( "
            qry = qry & "'" & f.TagIDs & "', '" & f.Title.Trim.Replace("'", "''") & "', '" & f.Story.Trim.Replace("'", "''") & "','" & f.View.Trim.Replace("'", "''") & "','" & f.KeyTakeAway.Trim.Replace("'", "''") & "','" & f.ExclFromChild & "' )  ; select @@identity; "
            mScId = x.InsertRecord(qry)
        Else
            qry = "update scenarios set UpdatedOn=NOW() "
            qry = qry & ",  TagIDs = '" & f.TagIDs & "'"
            qry = qry & ",  Title = '" & f.Title.Trim.Replace("'", "''") & "'"
            qry = qry & ",  Story = '" & f.Story.Trim.Replace("'", "''") & "'"
            qry = qry & ",  View = '" & f.View.Trim.Replace("'", "''") & "'"
            qry = qry & ",  KeyTakeAway = '" & f.KeyTakeAway.Trim.Replace("'", "''") & "'"
            qry = qry & ",  ExclFromChild = '" & f.ExclFromChild & "'"
            qry = qry & " where ScenarioID = '" & f.ScenarioID & "'"
            Try
                x.UpdateRecord(qry)
                mScId = f.ScenarioID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        qry = "delete from ScenarioTags  where ScenarioID = '" & mScId & "'"
        x.UpdateRecord(qry)
        Dim mTags() As String = f.TagIDs.Split(",")
        For i = 0 To mTags.Count - 1
            If mTags(i).Trim = "" Then
            Else
                qry = "INSERT INTO `ScenarioTags`(`TagID`, `ScenarioID` ) values ( '" & mTags(i) & "','" & mScId & "' )"
                x.UpdateRecord(qry)
            End If
        Next
        x.ConnectionClose()
        Return mScId
    End Function
    Public Function Delete(ScenarioID As Int32) As Int32
        Delete = 0
        If ScenarioID = 0 Then Exit Function
        Dim qry As String = "delete from scenarios  where ScenarioID = '" & ScenarioID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetScenarios() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `ScenarioID`, `Title`, `Story`, `View`, `KeyTakeAway`, `ExclFromChild`, `TagIDs` FROM `scenarios` WHERE 1 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ScenarioID = row(0),
            Key .Title = row(1).ToString(),
            Key .Story = row(2).ToString(),
            Key .View = row(3).ToString(),
            Key .KeyTakeAway = row(4).ToString(),
            Key .ExclFromChild = row(5).ToString(),
            Key .TagIds = row(6).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetScenarios(ScenarioID As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `ScenarioID`, `Title`, `Story`, `View`, `KeyTakeAway`, `ExclFromChild`, `TagIDs` FROM `scenarios` WHERE ScenarioID = '" & ScenarioID & "'")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ScenarioID = row(0),
            Key .Title = row(1).ToString(),
            Key .Story = row(2).ToString(),
            Key .View = row(3).ToString(),
            Key .KeyTakeAway = row(4).ToString(),
            Key .ExclFromChild = row(5).ToString(),
            Key .TagIds = row(6).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class

Public Class ActKey
    Public ActKeyId As Int32 = 0
    Public ProgId As Int16 = 0
    Public ActKey As String = ""
    Public BoughtBy As Int32 = 0
    Public ConsumeDate As String = ""
    Public ConsumeBy As Int32 = 0
    Public Note As String = ""
    Public NoOfKeys As Int16 = 1
    Function GenerateActKey(f As ActKey) As String()
        Dim keys(f.NoOfKeys - 1) As String
        If f.ConsumeDate.Trim = "" Then f.ConsumeDate = "1900-01-01"
        Dim qry As String = ""
        Dim mScId As String = ""
        Dim x As New LibDll.MySqlConn
        Dim mActKey As String = ""
        For I = 0 To f.NoOfKeys - 1
            mActKey = NextActKey(x)
            If f.ActKeyId = 0 Then
                qry = "INSERT INTO `activationkey`(  `ActivationKey`,`Note`, `NoOfKeys`, `BoughtBy`, `ConsumedDate`, `ConsumedBy`, `ProgramId` ) VALUES   ( "
                qry = qry & "'" & mActKey & "', '" & f.Note.Trim.Replace("'", "''") & "','" & f.NoOfKeys & "','" & f.BoughtBy & "','" & f.ConsumeDate.Trim.Replace("'", "''") & "','" & f.ConsumeBy & "','" & f.ProgId & "' )  ; select @@identity; "
                mScId = x.InsertRecord(qry)
                If mScId > "0" Then
                    keys(I) = mActKey
                Else
                    I = I - 1
                End If
            End If
        Next
        x.ConnectionClose()
        Return keys
    End Function
    Private Function NextActKey(x As LibDll.MySqlConn) As String
        Dim mFormat As String = ""
        Dim qry As String = "select SUBSTRING(ActivationKey,1,5) from activationkey order by 1 desc LIMIT 1 "
        Dim mkey As String = x.GetValue(qry)
        If mkey.Trim = "" Then
            mkey = "A0000"  '& Now.ToString("fff")
        Else
            Dim mNo As String
            Dim mAlfa As String
            mNo = New String((From c As Char In mkey Select c Where Char.IsDigit(c)).ToArray())
            mAlfa = New String((From c As Char In mkey Select c Where Char.IsLetter(c)).ToArray())
            Select Case mNo
                Case "9999"
                    'mAlfa = "B"
                    'Dim a As Char = "a"
                    mAlfa = Chr(Asc(mAlfa) + 1)
                    mNo = "0000"
            End Select
            'mFormat = "D" + (6 - mAlfa.Length).ToString
            For i = 1 To (5 - mAlfa.Length)
                mFormat = mFormat & "0"
            Next
            mkey = mAlfa & (mNo + 1).ToString(mFormat)
        End If
        mkey = mkey & Now.ToString("fff")
        Return mkey
        'Dim input As String = "sdff45hg589>@#DF456&<jk778P&&FHJ75"
        'Dim output As String = New String((From c As Char In input Select c Where Char.IsDigit(c)).ToArray())
        'MsgBox(output) 'Display the output 
        'Dim input As String = "sdff45hg589>@#DF456&<jk778P&&FHJ75"
        'Dim output As String = New String((From c As Char In input Select c Where Char.IsLetter(c)).ToArray())
        'MsgBox(output)
    End Function
    Function CheckIncreseAlpha(AlphaStr As String) As String
        'Dim x = parseBase("ZZZZ", 26)
        Dim x = parseBase(AlphaStr, 26)
        Return convertBase(x + 1, 26) 'BAAA
    End Function
    Function CheckIncreseAlpha() As String
        Dim mRet As String = ""
        For i = 0 To 15000
            'Debug.Print(i & "; " & convertBase(i, 26))
            mRet = mRet & convertBase(i, 26) & ", "
        Next
        Return mRet
    End Function
    Private Function convertBase(input As Integer, radix As Integer) As String
        Dim result = ""
        Dim a = Asc("A")
        Do While input > -1
            Dim x = input Mod radix
            result = Chr(a + x) & result
            input = Math.Floor(input / radix) - 1
        Loop
        Return result
    End Function

    Private Function parseBase(input As String, radix As Integer) As Integer
        Dim length = input.Length
        Dim a = Asc("A")
        Dim result As Integer
        For Each c As Char In input
            Dim x = Asc(c) - a + 1
            result += x * Math.Pow(radix, length - 1)
            length -= 1
        Next
        Return result - 1
    End Function
    Public Function Add(f As ActKey) As String
        Add = 0
        If f.ActKey = "" Then
            Return "ActKey can not be blank"
            Exit Function
        End If
        If CommonFns.ValueExists("activationkey", "ActivationKey", f.ActKey, "ActKeyId", f.ActKeyId) Then
            Return "ActKey already exists"
            Exit Function
        End If
        If f.ConsumeDate.Trim = "" Then f.ConsumeDate = "1900-01-01"
        Dim qry As String = ""
        Dim mScId As String = ""
        Dim x As New LibDll.MySqlConn
        If f.ActKeyId = 0 Then
            qry = "INSERT INTO `activationkey`(  `ActivationKey`, `BoughtBy`, `ConsumedDate`, `ConsumedBy`, `ProgramId` ) VALUES   ( "
            qry = qry & "'" & f.ActKey.Trim.Replace("'", "''") & "', '" & f.BoughtBy & "','" & f.ConsumeDate.Trim.Replace("'", "''") & "','" & f.ConsumeBy & "','" & f.ProgId & "' )  ; select @@identity; "
            mScId = x.InsertRecord(qry)
        Else
            qry = "update activationkey set UpdatedOn=NOW() "
            qry = qry & ",  ActivationKey = '" & f.ActKey.Trim.Replace("'", "''") & "'"
            qry = qry & ",  BoughtBy = '" & f.BoughtBy & "'"
            qry = qry & ",  ConsumedDate = '" & f.ConsumeDate.Trim.Replace("'", "''") & "'"
            qry = qry & ",  ConsumedBy = '" & f.ConsumeBy & "'"
            qry = qry & ",  ProgramId = '" & f.ProgId & "'"
            qry = qry & " where ActKeyId = '" & f.ActKeyId & "'"
            Try
                x.UpdateRecord(qry)
                mScId = f.ActKeyId
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
        Return mScId
    End Function
    Public Function Delete(ActKeyId As Int32) As Int32
        Delete = 0
        If ActKeyId = 0 Then Exit Function
        Dim qry As String = "delete from activationkey  where ActKeyId = '" & ActKeyId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function Getactivationkey() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `ActKeyId`, `ActivationKey`, `BoughtBy`, `ConsumedDate`, `ConsumedBy`, `ProgramId` FROM `activationkey` WHERE 1 ")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ActKeyId = row(0),
            Key .ActKey = row(1).ToString(),
            Key .BoughtBy = row(2).ToString(),
            Key .ConsumeDate = row(3).ToString(),
            Key .ConsumeBy = row(4).ToString(),
            Key .ProgId = row(5).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function Getactivationkey(ActKeyId As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `ActKeyId`, `ActivationKey`, `BoughtBy`, `ConsumedDate`, `ConsumedBy`, `ProgramId` FROM `activationkey` WHERE ActKeyId = '" & ActKeyId & "'")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ActKeyId = row(0),
            Key .ActKey = row(1).ToString(),
            Key .BoughtBy = row(2).ToString(),
            Key .ConsumeDate = row(3).ToString(),
            Key .ConsumeBy = row(4).ToString(),
            Key .ProgId = row(5).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function

    Function Verify(ActKey As String) As String
        If ActKey.Trim = "" Then
            Return "Activation Key can not be blank"
        End If
        Dim x As New LibDll.MySqlConn
        Dim qry As String = ""
        qry = "select actkeyid from `activationkey` WHERE ActivationKey = '" & ActKey.Trim & "'"
        If x.GetValue(qry) = "" Then
            x.ConnectionClose()
            Return "Invalid Activation Key"
        End If
        qry = "SELECT `ActKeyID` FROM `activationkey` WHERE (isnull(ConsumedBy) = 1 or ConsumedBy = 0 ) and ActivationKey = '" & ActKey.Trim & "'"
        If x.GetValue(qry) = "" Then
            Verify = "Sorry, This Activation Key consumed by someone else"
        Else
            Verify = "1"
        End If
        x.ConnectionClose()
    End Function
End Class




Public Class testimonials
    Public TestimonialID As Int32 = 0
    Public Name As String = ""
    Public Designation As String = ""
    Public Testimonial As String = ""
    Public Function Add(f As testimonials) As Int32
        Add = 0
        If f.Name = "" Then Exit Function
        If f.Testimonial.Trim = "" Then Exit Function
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.TESTIMONIALID = 0 Then
            qry = "INSERT INTO `testimonials`( `Designation`, `Testimonial`, `Name`) VALUES ( '" & f.Designation.Trim.Replace("'", "''") & "','" & f.Testimonial.Trim.Replace("'", "''") & "', '" & f.Name & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update testimonials set UpdatedOn=NOW(), Name = '" & f.Name & "' "
            qry = qry & ",  Designation = '" & f.Designation.Trim.Replace("'", "''") & "'"
            qry = qry & ",  Testimonial = '" & f.Testimonial.Trim.Replace("'", "''") & "'"
            qry = qry & " where TESTIMONIALID = '" & f.TestimonialID & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.TestimonialID
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(TestimonialID As Int32) As Int32
        Delete = 0
        If TestimonialID = 0 Then Exit Function
        Dim qry As String = "delete from testimonials  where TESTIMONIALID = '" & TestimonialID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetTestimonials() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `TESTIMONIALID`, `Name`, `Designation`, `Testimonial` FROM `testimonials` WHERE 1")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .TestimonialID = row(0),
            Key .Name = row(1).ToString(),
            Key .Designation = row(2).ToString(),
            Key .Testimonial = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetTestimonials(TestimonialID As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `TESTIMONIALID`, `Name`, `Designation`, `Testimonial` FROM `testimonials` WHERE TESTIMONIALID = '" & TestimonialID & "'")

        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .TestimonialID = row(0),
            Key .Name = row(1).ToString(),
            Key .Designation = row(2).ToString(),
            Key .Testimonial = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class





Public Class Gifts
    Public GiftId As Int32 = 0
    Public SubscriberID As Int32 = 0
    Public GifteeEmail As String = ""
    Public GifteeName As String = ""
    Public Function Add(f As Gifts) As String
        Add = "0"
        If f.SubscriberID = 0 Then
            Return "Subscriber ID should not be zero"
            Exit Function
        End If
        If f.GifteeEmail.Trim = "" Then
            Return "Giftee Email should not be Blank"
            Exit Function
        End If
        If f.GifteeName.Trim = "" Then
            Return "Giftee Name should not be Blank"
            Exit Function
        End If
        If CommonFns.IsValidEmailFormat(f.GifteeEmail.Trim) Then
        Else
            Return "Giftee Email is not Valid"
            Exit Function
        End If
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.GiftId = 0 Then
            qry = "insert into `gift`(`GifteeEmail`, `GifteeName`, `SubscriberID`) VALUES ( '" & f.GifteeEmail.Trim.Replace("'", "''") & "','" & f.GifteeName.Trim.Replace("'", "''") & "', '" & f.SubscriberID & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update gift set UpdatedOn=NOW(), SubscriberID = '" & f.SubscriberID & "' "
            qry = qry & ",  GifteeEmail= '" & f.GifteeEmail.Trim.Replace("'", "''") & "'"
            qry = qry & ",  GifteeName = '" & f.GifteeName.Trim.Replace("'", "''") & "'"
            qry = qry & " where GiftID = '" & f.GiftId & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.GiftId
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(GiftID As Int32) As Int32
        Delete = 0
        If GiftID = 0 Then Exit Function
        Dim qry As String = "delete from gift  where GiftID = '" & GiftID & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Function GetGiftList() As IEnumerable
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `GiftID`, `SubscriberID`, `GifteeEmail`, `GifteeName` FROM `gift` WHERE 1")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .GiftID = row(0),
            Key .SubscriberID = row(1).ToString(),
            Key .GifteeEmail = row(2).ToString(),
            Key .GifteeName = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Function GetGiftList(mGiftId As Int32) As IEnumerable
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `GiftID`, `SubscriberID`, `GifteeEmail`, `GifteeName` FROM `gift` WHERE  GiftId = '" & mGiftId & "'")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .GiftID = row(0),
            Key .SubscriberID = row(1).ToString(),
            Key .GifteeEmail = row(2).ToString(),
            Key .GifteeName = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class


Public Class Refer
    Public ReferId As Int32 = 0
    Public UserId As Int16 = 0
    Public FriendName As String = ""
    Public FriendEmail As String = ""
    Public ConvertedDate As String = ""
    Public Percentage As Single = 0
    Public Function Add(f As Refer) As String
        Add = 0
        If f.UserId = "" Then
            Return "User Id can not be blank or Zero"
            Exit Function
        End If
        If f.FriendName = "" Then
            Return "Friend Name can not be blank"
            Exit Function
        End If
        'If CommonFns.ValueExists("refer", "refer", f.Refer, "ReferId", f.ReferId) Then
        '    Return "Refer already exists"
        '    Exit Function
        'End If
        If f.ConvertedDate.Trim = "" Then f.ConvertedDate = "1900-01-01"
        Dim qry As String = ""
        Dim mScId As String = ""
        Dim x As New LibDll.MySqlConn
        If f.ReferId = 0 Then
            qry = "INSERT INTO `refer` ( `FriendName`,  `FriendEmail`, `ConvertedDate`, `Percentage`, `USERID` ) VALUES   ( "
            qry = qry & "'" & f.FriendName.Trim.Replace("'", "''") & "', '" & f.FriendEmail & "','" & f.ConvertedDate.Trim.Replace("'", "''") & "','" & f.Percentage & "','" & f.UserId & "' )  ; select @@identity; "
            mScId = x.InsertRecord(qry)
        Else
            qry = "update refer set UpdatedOn=NOW() "
            qry = qry & ",  FriendName = '" & f.FriendName.Trim.Replace("'", "''") & "'"
            qry = qry & ",  FriendEmail = '" & f.FriendEmail & "'"
            qry = qry & ",  ConvertedDate = '" & f.ConvertedDate.Trim.Replace("'", "''") & "'"
            qry = qry & ",  Percentage = '" & f.Percentage & "'"
            qry = qry & ",  USERID = '" & f.UserId & "'"
            qry = qry & " where ReferId = '" & f.ReferId & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.ReferId
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
        Return mScId
    End Function
    Public Function Delete(ReferId As Int32) As Int32
        Delete = 0
        If ReferId = 0 Then Exit Function
        Dim qry As String = "delete from refer  where ReferId = '" & ReferId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetRefers() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `REFERID`, `FriendName`, `FriendEmail`, `ConvertedDate`, `Percentage`, `USERID` FROM `refer` WHERE 1")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ReferId = row(0),
            Key .FriendName = row(1).ToString(),
            Key .FriendEmail = row(2).ToString(),
            Key .ConvertedDate = row(3).ToString(),
            Key .Percentage = row(4).ToString(),
            Key .UserId = row(5).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetRefers(ReferId As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `REFERID`, `FriendName`, `FriendEmail`, `ConvertedDate`, `Percentage`, `USERID` FROM `refer` WHERE  ReferId = '" & ReferId & "'")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ReferId = row(0),
            Key .FriendName = row(1).ToString(),
            Key .FriendEmail = row(2).ToString(),
            Key .ConvertedDate = row(3).ToString(),
            Key .Percentage = row(4).ToString(),
            Key .UserId = row(5).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class


Public Class screens
    Public ScrId As Int32 = 0
    Public ModuleId As Int32 = 0
    Public GSetID As Int32 = 0
    Public ScreenNo As String = ""
    Public Function Add(f As screens) As String
        Add = "0"
        If f.GSetID = 0 Then
            Return "Module Id should not be Zero"
            Exit Function
        End If
        If f.GSetID = 0 Then
            Return "Global Setting Id should not be Zero"
            Exit Function
        End If
        If f.ScreenNo.Trim = "" Then
            Return "Screen No should not be blank"
            Exit Function
        End If
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.ScrId = 0 Then
            qry = "INSERT INTO `screens`( `ScreenNo`,`ModuleID`, `GSetID` ) VALUES  ( '" & f.ScreenNo.Trim.Replace("'", "''") & "','" & f.ModuleId & "', '" & f.GSetID & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update screens set UpdatedOn=NOW(), GSetID = '" & f.GSetID & "' "
            qry = qry & ",  ModuleID = '" & f.ModuleId & "'"
            qry = qry & ",  ScreenNo = '" & f.ScreenNo.Trim.Replace("'", "''") & "'"
            qry = qry & " where ScrId = '" & f.ScrId & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.ScrId
            Catch ex As Exception
                Add = ex.Message
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(ScrId As Int32) As Int32
        Delete = 0
        If ScrId = 0 Then Exit Function
        Dim qry As String = "delete from screens  where ScrId = '" & ScrId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function

    Async Function GetScreens() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `ScrID`, `ModuleID`, `ScreenNo`, `GSetID`  FROM `screens` WHERE 1")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ScrID = row(0),
            Key .ModuleID = row(1).ToString(),
            Key .ScreenNo = row(2).ToString(),
            Key .GSetID = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetScreens(ScreenId As Int16) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `ScrID`, `ModuleID`, `ScreenNo`, `GSetID`  FROM `screens` WHERE scrid = '" & ScreenId & "'")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ScrID = row(0),
            Key .ModuleID = row(1).ToString(),
            Key .ScreenNo = row(2).ToString(),
            Key .GSetID = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetScrByGSetID(GSetID As Int16) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `ScrID`, `ModuleID`, `ScreenNo`, `GSetID`  FROM `screens` WHERE GSetID = '" & GSetID & "'")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ScrID = row(0),
            Key .ModuleID = row(1).ToString(),
            Key .ScreenNo = row(2).ToString(),
            Key .GSetID = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetScrByModule(ModID As Int16) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `ScrID`, `ModuleID`, `ScreenNo`, `GSetID`  FROM `screens` WHERE ModuleID = '" & ModID & "'")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .ScrID = row(0),
            Key .ModuleID = row(1).ToString(),
            Key .ScreenNo = row(2).ToString(),
            Key .GSetID = row(3).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class


Public Class Payments
    Public PayId As Int32 = 0
    Public SubScrId As Int32 = 0
    Public RefNo As String = ""
    Public TransNo As String = ""
    Public StripeId As String = ""
    Public CardType As String = ""
    Public PaidBy As Int32 = 0
    Public SuccessCode As String = ""
    Public Digits4 As Int16 = 0
    Public Mobile As String = ""
    Public Amount As Int16 = 0
    Public Function Add(f As Payments) As String
        Add = ""
        If f.SubScrId = 0 Then
            Return "Subscriber Id can not be Blank"
            Exit Function
        End If
        If f.Amount = 0 Then
            Return "Amount can not be zero"
            Exit Function
        End If
        Dim qry As String = ""
        Dim x As New LibDll.MySqlConn
        If f.PayId = 0 Then
            qry = "INSERT INTO `payments`( `SubscriberID`,  `RefNo`, `TransNo`, `StripeId`,`CardType`, `PaidBy`, `SuccessCode`, `Digits4`, `Mobile`,  `Amount` ) VALUES   ( "
            qry = qry & "'" & f.SubScrId & "', '" & f.RefNo.Trim.Replace("'", "''") & "', '" & f.TransNo & "','" & f.StripeId & "','" & f.CardType & "','" & f.PaidBy & "','" & f.SuccessCode & "','" & f.Digits4 & "','" & f.Mobile.Trim.Replace("'", "''") & "','" & f.Amount & "' )  ; select @@identity; "
            Add = x.InsertRecord(qry)
        Else
            qry = "update payments set UpdatedOn=NOW() "
            qry = qry & ",  SubscriberID = '" & f.SubScrId & "'"
            qry = qry & ",  CardType = '" & f.CardType & "'"
            qry = qry & ",  RefNo = '" & f.RefNo.Trim.Replace("'", "''") & "'"
            qry = qry & ",  TransNo = '" & f.TransNo & "'"
            qry = qry & ",  StripeId = '" & f.StripeId & "'"
            qry = qry & ",  PaidBy = '" & f.PaidBy & "'"
            qry = qry & ",  SuccessCode = '" & f.SuccessCode & "'"
            qry = qry & ",  Digits4 = '" & f.Digits4 & "'"
            qry = qry & ",  Mobile = '" & f.Mobile.Trim.Replace("'", "''") & "'"
            qry = qry & ",  CardType = '" & f.CardType & "'"
            qry = qry & ",  Amount = '" & f.Amount & "'"
            qry = qry & " where PayId = '" & f.PayId & "'"
            Try
                x.UpdateRecord(qry)
                Add = f.PayId
            Catch ex As Exception
                Add = 0
            End Try
        End If
        x.ConnectionClose()
    End Function
    Public Function Delete(PayId As Int32) As Int32
        Delete = 0
        If PayId = 0 Then Exit Function
        Dim qry As String = "delete from payments  where PayId = '" & PayId & "'"
        Dim x As New LibDll.MySqlConn
        Try
            x.UpdateRecord(qry)
            Delete = 1
        Catch ex As Exception
        End Try
        x.ConnectionClose()
    End Function
    Async Function GetPayments() As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `PayId`, `SubscriberID`, `RefNo`, `TransNo`, `StripeId`, `CardType`, `PaidBy`, `SuccessCode`, `Digits4`, `Mobile`, `Amount` FROM `payments` WHERE 1")
        dt = DS.Tables(0)

        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .PayId = row(0),
            Key .SubScrId = row(1).ToString(),
            Key .RefNo = row(2).ToString(),
            Key .TransNo = row(3).ToString(),
            Key .StripeId = row(4).ToString(),
            Key .CardType = row(5).ToString(),
            Key .PaidBy = row(6).ToString(),
            Key .SuccessCode = row(7).ToString(),
            Key .Digits4 = row(8).ToString(),
            Key .Mobile = row(9).ToString(),
            Key .Amount = row(10).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
    Async Function GetPayments(PayId As Int32) As Threading.Tasks.Task(Of IEnumerable)
        Dim x As New LibDll.MySqlConn
        Dim DS As New DataSet
        Dim dt As New DataTable()
        DS = x.GetDataSet("SELECT `PayId`, `SubscriberID`, `RefNo`, `TransNo`, `StripeId`, `CardType`, `PaidBy`, `SuccessCode`, `Digits4`, `Mobile`, `Amount` FROM `payments` WHERE payid = '" & PayId & "'")
        dt = DS.Tables(0)
        Dim data = dt.AsEnumerable().[Select](Function(row) New With {
            Key .PayId = row(0),
            Key .SubScrId = row(1).ToString(),
            Key .RefNo = row(2).ToString(),
            Key .TransNo = row(3).ToString(),
            Key .StripeId = row(4).ToString(),
            Key .CardType = row(5).ToString(),
            Key .PaidBy = row(6).ToString(),
            Key .SuccessCode = row(7).ToString(),
            Key .Digits4 = row(8).ToString(),
            Key .Mobile = row(9).ToString(),
            Key .Amount = row(10).ToString()
            })
        x.ConnectionClose()
        Return data
    End Function
End Class