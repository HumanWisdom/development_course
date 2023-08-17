import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134195Page } from './s134195.page';

describe('S134195Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134195Page;
  let fixture: ComponentFixture<S134195Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134195Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134195Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
