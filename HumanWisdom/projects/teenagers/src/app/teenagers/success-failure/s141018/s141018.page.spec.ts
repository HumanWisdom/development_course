import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141018Page } from './s141018.page';

describe('S141018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141018Page;
  let fixture: ComponentFixture<S141018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
