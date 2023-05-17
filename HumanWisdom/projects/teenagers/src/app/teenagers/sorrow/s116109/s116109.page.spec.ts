import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116109Page } from './s116109.page';

describe('S116109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116109Page;
  let fixture: ComponentFixture<S116109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
