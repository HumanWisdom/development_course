import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116111Page } from './s116111.page';

describe('S116111Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116111Page;
  let fixture: ComponentFixture<S116111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116111Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
