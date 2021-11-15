import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62154Page } from './s62154.page';

describe('S62154Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62154Page;
  let fixture: ComponentFixture<S62154Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62154Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62154Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
