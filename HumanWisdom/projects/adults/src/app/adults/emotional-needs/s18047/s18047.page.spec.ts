import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18047Page } from './s18047.page';

describe('S18047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18047Page;
  let fixture: ComponentFixture<S18047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
