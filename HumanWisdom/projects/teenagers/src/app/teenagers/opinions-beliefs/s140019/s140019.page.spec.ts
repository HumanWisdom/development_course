import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140019Page } from './s140019.page';

describe('S140019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140019Page;
  let fixture: ComponentFixture<S140019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
