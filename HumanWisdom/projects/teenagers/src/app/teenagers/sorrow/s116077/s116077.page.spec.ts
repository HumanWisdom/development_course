import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116077Page } from './s116077.page';

describe('S116077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116077Page;
  let fixture: ComponentFixture<S116077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
