import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28009Page } from './s28009.page';

describe('S28009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28009Page;
  let fixture: ComponentFixture<S28009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
