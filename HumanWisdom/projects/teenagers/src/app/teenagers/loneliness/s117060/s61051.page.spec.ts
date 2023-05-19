import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61171Page } from './s61171.page';

describe('S61171Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61171Page;
  let fixture: ComponentFixture<S61171Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61171Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61171Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
