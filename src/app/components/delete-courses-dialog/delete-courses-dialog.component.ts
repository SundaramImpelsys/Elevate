import { Component, OnInit, Inject } from '@angular/core';
import { UserData } from 'src/app/interfaces/user.data';
import { selectUser } from 'src/app/store/selectors/userVerification.selectors';
import { Store } from '@ngrx/store'; 
import { AuthState } from 'src/app/store/reducers/userVerification.reducers';
import { DataService } from 'src/app/services/data.service';
import { updateUser } from 'src/app/store/actions/userVerification.actions';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-courses-dialog',
  templateUrl: './delete-courses-dialog.component.html',
  styleUrls: ['./delete-courses-dialog.component.css']
})
export class DeleteCoursesDialogComponent implements OnInit {
  user: UserData | null = null;
  selectedCourses: string[] = [];
  removeCourses: string[] = [];

  constructor(
    private readonly store: Store<AuthState>,
    private readonly dataService: DataService,
    public dialog: MatDialog,
    private readonly http: HttpClient,
    public dialogRef: MatDialogRef<DeleteCoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => { 
      this.user = user;
      console.log(user);
    });

    if (this.user?.createdCourses) {
      this.selectedCourses = this.user.createdCourses;
      console.log(this.selectedCourses);
      console.log(this.user);
    }
  }

  toggleCourseSelection(course: string) {
    const selectedCoursesCopy = this.selectedCourses.slice();
  
    const index = selectedCoursesCopy.indexOf(course);
    if (index > -1) {
      this.removeCourses.push(course);
      selectedCoursesCopy.splice(index, 1);
    } else {
      this.removeCourses = this.removeCourses.filter(c => c!== course);
      selectedCoursesCopy.push(course);
    }
    this.selectedCourses = selectedCoursesCopy;
  }

  openDeleteDialog(): void { 
    const dialogRef = this.dialog.open(DeleteConfirmationComponent); 
    dialogRef.afterClosed().subscribe(result => { 
      if (result) { 
        this.deleteSelectedCourses(); 
      } 
    }); 
  }
  

  deleteSelectedCourses() {
    if (this.user) {
      const userClone = { ...this.user, createdCourses: this.selectedCourses };
      this.user = userClone;
      console.log(userClone);
      this.store.dispatch(updateUser({ user: this.user }));
      this.dataService.putItem(this.user.id, this.user).subscribe(() => {
        console.log('Selected courses removed successfully', this.selectedCourses);
      });
      const profession = this.user.profession;
      let removeCoursesCopy = this.removeCourses;
      console.log('Removing courses', removeCoursesCopy);
      if (profession) {
        const body = { removeCourses: removeCoursesCopy, profession: profession };
        this.http.delete('http://localhost:3000/deleteCourse', { body }).subscribe(() => {
          console.log('Courses successfully removed from backend');
        });
      }
      this.selectedCourses = [];
      this.dialogRef.close();
    }
  }   

  cancel() {
    this.dialogRef.close();
  }
}
