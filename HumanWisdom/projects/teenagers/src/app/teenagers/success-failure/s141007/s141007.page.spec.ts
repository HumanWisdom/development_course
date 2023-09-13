import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141007Page } from './s141007.page';

describe('S141007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141007Page;
  let fixture: ComponentFixture<S141007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
