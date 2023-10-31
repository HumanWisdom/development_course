import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18072Page } from './s18072.page';

describe('S18072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18072Page;
  let fixture: ComponentFixture<S18072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
