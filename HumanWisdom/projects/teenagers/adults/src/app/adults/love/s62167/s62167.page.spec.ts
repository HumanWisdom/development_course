import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62167Page } from './s62167.page';

describe('S62167Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62167Page;
  let fixture: ComponentFixture<S62167Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62167Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62167Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
