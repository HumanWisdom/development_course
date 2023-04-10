import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S96001Page } from './s96001.page';

describe('S96001Page', () => {
     
    let component: S96001Page;
  let fixture: ComponentFixture<S96001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S96001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S96001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
