import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117038Page } from './s117038.page';

describe('S117038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117038Page;
  let fixture: ComponentFixture<S117038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
