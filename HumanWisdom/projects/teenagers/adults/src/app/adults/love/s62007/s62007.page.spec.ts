import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62007Page } from './s62007.page';

describe('S62007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62007Page;
  let fixture: ComponentFixture<S62007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
