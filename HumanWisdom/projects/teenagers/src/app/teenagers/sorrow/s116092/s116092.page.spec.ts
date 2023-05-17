import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116092Page } from './s116092.page';

describe('S116092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116092Page;
  let fixture: ComponentFixture<S116092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
