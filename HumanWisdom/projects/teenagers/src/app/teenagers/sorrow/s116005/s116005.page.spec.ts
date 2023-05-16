import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116005Page } from './s116005.page';

describe('S116005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116005Page;
  let fixture: ComponentFixture<S116005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
