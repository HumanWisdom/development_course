import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62023Page } from './s62023.page';

describe('S62023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62023Page;
  let fixture: ComponentFixture<S62023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
