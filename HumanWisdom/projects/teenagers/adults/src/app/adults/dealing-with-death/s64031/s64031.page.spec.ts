import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64031Page } from './s64031.page';

describe('S64031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64031Page;
  let fixture: ComponentFixture<S64031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
