import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18074Page } from './s18074.page';

describe('S18074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18074Page;
  let fixture: ComponentFixture<S18074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
