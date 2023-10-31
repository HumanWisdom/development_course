import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48058Page } from './s48058.page';

describe('S48058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48058Page;
  let fixture: ComponentFixture<S48058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
