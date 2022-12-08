import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25005Page } from './s25005.page';

describe('S25005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25005Page;
  let fixture: ComponentFixture<S25005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
