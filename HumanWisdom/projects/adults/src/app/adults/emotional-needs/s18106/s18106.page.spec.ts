import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18106Page } from './s18106.page';

describe('S18106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18106Page;
  let fixture: ComponentFixture<S18106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
