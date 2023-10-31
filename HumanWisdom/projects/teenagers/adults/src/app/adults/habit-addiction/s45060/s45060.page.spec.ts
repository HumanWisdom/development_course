import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45060Page } from './s45060.page';

describe('S45060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45060Page;
  let fixture: ComponentFixture<S45060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
