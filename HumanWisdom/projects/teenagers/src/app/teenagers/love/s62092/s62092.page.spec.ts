import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62092Page } from './s62092.page';

describe('S62092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62092Page;
  let fixture: ComponentFixture<S62092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
