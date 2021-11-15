import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18014Page } from './s18014.page';

describe('S18014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18014Page;
  let fixture: ComponentFixture<S18014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
