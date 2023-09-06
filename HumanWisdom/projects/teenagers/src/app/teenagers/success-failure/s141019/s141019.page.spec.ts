import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141019Page } from './s141019.page';

describe('S141019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141019Page;
  let fixture: ComponentFixture<S141019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
