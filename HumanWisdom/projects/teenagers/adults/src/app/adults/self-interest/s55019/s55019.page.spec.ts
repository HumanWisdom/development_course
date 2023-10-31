import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55019Page } from './s55019.page';

describe('S55019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55019Page;
  let fixture: ComponentFixture<S55019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
