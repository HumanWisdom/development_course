import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59019Page } from './s59019.page';

describe('S59019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59019Page;
  let fixture: ComponentFixture<S59019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
