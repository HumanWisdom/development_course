import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141072Page } from './s141072.page';

describe('S141072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141072Page;
  let fixture: ComponentFixture<S141072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
